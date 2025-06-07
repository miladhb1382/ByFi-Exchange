import IconSet from "../ui/iconSet";

const CategoryFilter = ({ icon, text }: { icon: string; text: string }) => (
  <div className="category-filter">
    <IconSet width={20} height={20} iconAddress={icon} />
    {text}
  </div>
);
export default CategoryFilter;
