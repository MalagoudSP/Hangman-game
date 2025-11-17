import CategoryItem from "../../UI/CategoryItem";
import Header from "../../UI/Header";

function CategoryPick() {
  const categories = [
    "movies",
    "tvShows",
    "countries",
    "capital_cities",
    "animals",
    "sports",
  ] as const;

  return (
    <div className="pb-15.5 md:pb-24.5 lg:pb-42">
      <Header> pick a category</Header>
      <div className="mt-25 grid gap-4 px-6.5 md:mt-28.5 md:grid-cols-2 md:gap-8 md:pr-12 md:pl-10 lg:mt-40 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12.5 lg:px-28">
        {categories.map((category, i) => (
          <CategoryItem key={i}>{category.replace("_", " ")}</CategoryItem>
        ))}
      </div>
    </div>
  );
}

export default CategoryPick;
