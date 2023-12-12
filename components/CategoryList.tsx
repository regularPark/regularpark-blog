interface CategoryListProps {
  categoryList: { [key: string]: number };
  selectedCategory: string | null;
  onSelect: (category: string) => void;
}

const CategoryList = ({
  categoryList,
  onSelect,
  selectedCategory,
}: CategoryListProps) => {
  return (
    <div className="flex flex-row w-full flex-wrap mt-12 justify-center lg:flex-col lg:mt-24 lg:justify-start lg:w-52 lg:w-min-52 gap-2 ml-auto mr-0">
      {Object.entries(categoryList).map(([category, count]) => (
        <button
          className={`px-4 w-fit border-2 h-8 rounded-2xl bg-gray-200 lg:border-none lg:bg-transparent ${
            category === selectedCategory
              ? 'text-black border-gray-400'
              : category === 'All' && selectedCategory === null
              ? 'text-black border-gray-400'
              : 'text-gray-500'
          } hover:underline`}
          onClick={() => onSelect(category)}
        >
          {category} ({count})
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
