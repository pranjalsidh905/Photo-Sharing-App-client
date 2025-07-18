import { createContext, useContext, useState } from "react";

const CategoryContext=createContext();

export const CategoryProvider=({children})=>{

    const [currentCategory,setCurrentCategory]=useState("All");

    const values={
        currentCategory,
        setCurrentCategory
    }

    return <CategoryContext.Provider value={values}>{children}</CategoryContext.Provider>
}

export const useCategoryContext=()=>useContext(CategoryContext);
// import { createContext, useContext, useState } from "react";

// const CategoryContext = createContext();

// export const CategoryProvider = ({ children }) => {
//   const [currentCategory, setCurrentCategory] = useState("All");

//   return (
//     <CategoryContext.Provider value={{ currentCategory, setCurrentCategory }}>
//       {children}
//     </CategoryContext.Provider>
//   );
// };

// export const useCategoryContext = () => useContext(CategoryContext);
