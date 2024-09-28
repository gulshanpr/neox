"use client";
import React, { useState } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// DraggableCard component
const DraggableCard = ({ id, title, description, content, footer }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });
  const style = transform
    ? {
        transform: CSS.Translate.toString(transform),
        zIndex: 1,
      }
    : undefined;

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <Card className="mb-4 cursor-move">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{content}</p>
        </CardContent>
        <CardFooter>
          <p>{footer}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

// DroppableArea component
const DroppableArea = ({ id, children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`p-4 border-2 border-dashed ${
        isOver ? "border-green-500" : "border-gray-300"
      } min-h-[200px] w-full flex justify-center items-center`}
    >
      {children}
    </div>
  );
};

// Main App component
function App() {
  const [cards, setCards] = useState([
    {
      id: "card1",
      title: "Card 1",
      description: "Description 1",
      content: "Content 1",
      footer: "Footer 1",
    },
    {
      id: "card2",
      title: "Card 2",
      description: "Description 2",
      content: "Content 2",
      footer: "Footer 2",
    },
    {
      id: "card3",
      title: "Card 3",
      description: "Description 3",
      content: "Content 3",
      footer: "Footer 3",
    },
    {
      id: "card4",
      title: "Card 4",
      description: "Description 4",
      content: "Content 4",
      footer: "Footer 4",
    },
    {
      id: "card5",
      title: "Card 5",
      description: "Description 5",
      content: "Content 5",
      footer: "Footer 5",
    },
    {
      id: "card6",
      title: "Card 6",
      description: "Description 6",
      content: "Content 6",
      footer: "Footer 6",
    },
    {
      id: "card7",
      title: "Card 7",
      description: "Description 7",
      content: "Content 7",
      footer: "Footer 7",
    },
    {
      id: "card8",
      title: "Card 8",
      description: "Description 8",
      content: "Content 8",
      footer: "Footer 8",
    },
  ]);

  const [droppedCards, setDroppedCards] = useState([]);

  // Handle the end of the drag
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over && over.id === "droppable") {
      // Find the dropped card from the available cards
      const droppedCard = cards.find((card) => card.id === active.id);
      if (droppedCard) {
        setDroppedCards((prevDropped) => [...prevDropped, droppedCard]); // Add the dropped card to the stack
        setCards((prevCards) => prevCards.filter((card) => card.id !== active.id)); // Remove the card from the original list
      }
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('/arena-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        padding: "20px",
      }}
    >
      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex flex-col h-full justify-between">
          {/* Top Draggable Cards */}
          <div className="flex justify-around w-full">
            {cards.slice(0, 4).map((card) => (
              <DraggableCard key={card.id} {...card} />
            ))}
          </div>

          {/* Droppable Area in the Center */}
          <div className="flex justify-center items-center my-10">
            <DroppableArea id="droppable">
              {droppedCards.length > 0 ? (
                droppedCards.map((card, index) => (
                  <Card key={card.id} className="mb-4">
                    <CardHeader>
                      <CardTitle>{card.title}</CardTitle>
                      <CardDescription>{card.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{card.content}</p>
                    </CardContent>
                    <CardFooter>
                      <p>{card.footer}</p>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <p>Drop a card here</p>
              )}
            </DroppableArea>
          </div>

          {/* Bottom Draggable Cards */}
          <div className="flex justify-around w-full">
            {cards.slice(4).map((card) => (
              <DraggableCard key={card.id} {...card} />
            ))}
          </div>
        </div>
      </DndContext>
    </div>
  );
}

export default App;
