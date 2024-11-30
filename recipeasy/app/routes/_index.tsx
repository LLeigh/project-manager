import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import ContainerBordered from "~/components/Bones/ContainerBordered";
import PageContainer from "~/components/Bones/PageContainer";
import Button from "~/components/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "Recipeasy - A Place to Manage Your Recipes" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main id="content" className="h-screen fixed flex justify-center w-full">
      <PageContainer type="centered" hasBackground>
        <ContainerBordered>
          <h1>A better way of keeping track of your recipes</h1>
          <h2>Welcome Back, Lindsay!</h2>
          <div className="border-2 border-black w-80 h-36 flex flex-col justify-between">
            <div className="background-image relative h-1/2 flex justify-center items-center">
              <span className="px-2 pb-3 bg-white w-fit font-support text-3xl">Recipes</span>
            </div>
            <div className="flex flex-row justify-center gap-4 my-4">
              <Button action="link" link="/recipes" label="Explore Recipes" style="secondary" />
              <Button action="link" link="/" label="Add Recipe" style="primary" />
            </div>

          </div>
        </ContainerBordered>
      </PageContainer>
    </main>
  );
}
