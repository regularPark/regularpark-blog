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
    <div className="flex flex-row w-screen h-14 whitespace-nowrap overflow-x-scroll px-4 mt-8 lg:h-fit lg:flex-col lg:mt-24 lg:justify-start lg:w-52 lg:w-min-52 lg:gap-0 gap-2 ml-auto mr-0">
      {Object.entries(categoryList).map(([category, count]) => (
        <button
          className={`category px-4 w-fit h-8 rounded-2xl lg:border-none lg:bg-transparent ${
            category === selectedCategory
              ? 'text-white bg-blue-400 lg:text-blue-400 selection'
              : category === 'All' && selectedCategory === null
              ? 'text-white bg-blue-400 lg:text-blue-400'
              : 'text-gray-400 bg-gray-200'
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
