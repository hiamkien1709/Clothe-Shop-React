import React, { useState } from "react";
import Modal from "./Modal";
import ProductForm from "./products/ProductForm";
import FilterForm from "./FilterForm";
import SearchForm from "./SearchForm";

const Header = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [openProduct, setOpenProduct] = useState(false);
  return (
    <header>
      <nav>
        <p>Home</p>
        <p onClick={() => setOpenSearch(true)}>Search</p>
        <p onClick={() => setOpenProduct(true)}>Create Product</p>
        <p onClick={() => setOpenFilter(true)}>Filter</p>
        <p>About Us</p>
      </nav>

      {openProduct && (
        <Modal titleTxt="Create Product" setOpen={setOpenProduct}>
          <ProductForm btnTxt="Create" />
        </Modal>
      )}

      {/* -------- Search --------- */}
      {openSearch && (
        <Modal titleTxt="Search" setOpen={setOpenSearch}>
          <SearchForm />
        </Modal>
      )}

      {openFilter && (
        <Modal titleTxt="Filter" setOpen={setOpenFilter}>
          <FilterForm />
        </Modal>
      )}
    </header>
  );
};

export default Header;
