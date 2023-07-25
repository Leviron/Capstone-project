"use client";

import { recipes } from "../lib/recipes";
import "./Card";
import Image from "next/image";
import { ContainerStyle, ImageStyle } from "./Card.styled";

  return (
    <>
      {recipes.map((recipe) => (
        <ContainerStyle key={recipe.id}>
          <Image
            src={`/images/${recipe.picture}`}
            width={60}
            height={50}
            alt={recipe.title}
          />
          <div className="ContainerStyle--text">
            <h1>{recipe.title}</h1>
            <h2>{recipe.subtitle}</h2>
          </div>
        </ContainerStyle>
      ))}
    </>
  );
}
