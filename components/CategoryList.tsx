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
    <div className="flex flex-row w-screen h-20 flex-wrap whitespace-nowrap overflow-y-scroll pb-2 px-4 lg:h-fit lg:flex-wrap lg:mt-44 lg:justify-start lg:w-1/4 lg:w-min-52 gap-2 ml-auto lg:gap-3">
      {Object.entries(categoryList).map(([category, count]) => (
        <button
          className={`category px-4 w-fit h-8 rounded-2xl ${
            category === selectedCategory
              ? 'text-white bg-primary-dark lg:text-white selection'
              : category === 'All' && selectedCategory === null
              ? 'text-white bg-primary-dark lg:text-white selection'
              : 'text-gray-500 bg-gray-200'
          } transition-shadow`}
          onClick={() => onSelect(category)}
        >
          {category} ({count})
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
