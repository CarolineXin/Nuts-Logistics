import React, { useState } from "react";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.css";

const TagSelector = ({ onChange }) => {
  const options = [
    { value: "人员档案", label: "人员档案" },
    { value: "坚果画报", label: "坚果画报" },
    { value: "坚果茶水间", label: "坚果茶水间" },
    { value: "冰风谷秘闻", label: "冰风谷秘闻" }
  ];
  const defaultValue = { value: "人员档案", label: "人员档案" };
  const [selectedOption, setSelectedOption] = useState(null);

  const handleTagSelect = (option) => {
    setSelectedOption(option);
    onChange(option); // 通知父组件选择发生变化
  };
  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? "#fff" : "#fff",
      backgroundColor: state.isSelected ? "purple" : "#212529",
      "&:hover": {
        backgroundColor: "purple", // 更改鼠标悬停时的背景颜色
      },
    }),

    menu: (defaultStyles) => ({
        ...defaultStyles,
        backgroundColor: "#212529",
        margin: 0, // 重置margin
        border: "none", // 去掉边框
        borderRadius: 0, // 去掉边框圆角
      }),

    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: "#212529",
      padding: "10px",
      border: "none",
      boxShadow: "none",
    }),
    
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
  };

  return (
    <div className="container">
      <div className="mt-5 m-auto w-50 text-light">
        <Select options={options} styles={customStyles} placeholder="请选择……" onChange={handleTagSelect}/>
      </div>
    </div>
  );
};
  
export default TagSelector;