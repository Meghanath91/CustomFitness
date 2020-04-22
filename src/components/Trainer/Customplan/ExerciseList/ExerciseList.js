import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function ExerciseList(props) {
  const columnsFromBackend = {
    select: {
      name: "Select Exercise(s)",
      items: [],
    },
    selected: {
      name: "Selected Exercise(s)",
      items: [],
    },
  };
  const [columns, setColumns] = useState(columnsFromBackend);
  useEffect(() => {
    const itemsFromBackend = props.exerciseData;
    setColumns((prev) => {
      return {
        ...prev,
        select: { name: "Select Exercise(s)", items: itemsFromBackend },
      };
    });
  }, [props.exerciseData]);
  props.setExerciseIdArray(columns.selected.items);

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
              }}
              key={columnId}
            >
              <h2
                style={{
                  color: "black",
                  margin: 0,
                }}
              >
                {column.name}
              </h2>
              <div
                style={{
                  margin: "2%",
                  width: "32rem",
                  alignContent: "center",
                }}
              >
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(3, 1fr)",
                          gridTemplateRows: "repeat(4, 1fr)",
                          background: snapshot.isDraggingOver
                            ? "#B7B7B7"
                            : "#3F3F3F",
                          padding: 4,
                          margin: "3%",
                          width: "90%",
                          height: "50rem",
                          textAlign: "center",
                          borderRadius: "8px",
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id.toString()}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: "none",
                                      padding: 16,
                                      margin: "2%",
                                      width: "95%",
                                      minHeight: "50px",
                                      textTransform: "uppercase",
                                      border: "1px solid black",
                                      borderRadius: "8px",
                                      textAlign: "center",
                                      fontWeight: "700",
                                      backgroundColor: snapshot.isDragging
                                        ? "#828282"
                                        : "#FFFFFF",
                                      color: "#000000",

                                      ...provided.draggableProps.style,
                                    }}
                                  >
                                    {item.name}
                                    <br />
                                    <img
                                      className="exercise-gif"
                                      src={item.thumbnail_photo_url}
                                      alt="exercise"
                                    />
                                    <br />
                                    {item.body_part}
                                    <br />
                                    {item.type}
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}
