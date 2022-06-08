import React, { useState } from "react";
import cl from "./infoBlocks.module.scss";
import pencil from "../../assets/img/page/Pencil.png";
import { companiesApi } from "../../services/companies";
import { useParams } from "react-router-dom";
import Modal from "../modal/Modal";
import CompanyForm from "../forms/companyForm/CompanyForm";

const CompanyInfo = () => {
  const param = useParams();
  const {
    data: company,
    isLoading,
    error,
  } = companiesApi.useGetCompanyQuery(param.id);

  const [isOpen, setIsopen] = useState(false);

  const handleOpen = () => {
    setIsopen(true);
  };

  const handleClose = () => {
    setIsopen(false);
  };

  if (error) {
    return <h1>Возможно когда-то и было, но сейчас нет</h1>;
  }
  if (isLoading) {
    return <h1>Загрузка</h1>;
  }

  return (
    company && (
      <div className={cl.Info}>
        <div className={cl.companyInfoTitle}>
          <h3>{company.shortName} </h3>
          <button onClick={handleOpen}>
            <img src={pencil} />
          </button>
        </div>
        <div>
          <div className={cl.companyInfoTitle}>
            <p>Общая информация </p>
            <button onClick={handleOpen}>
              <img src={pencil} />
            </button>
          </div>
          <div className={cl.infoContent}>
            <div className={cl.infoContentLeft}>
              <div>Полное название:</div>
              <div>договор:</div>
              <div>форма:</div>
              <div>тип:</div>
            </div>

            <div>
              <div>{company.name}</div>
              <div>
                {company.contract.no} от {company.contract.issue_date}
              </div>
              <div>{company.businessEntity} </div>
              <div>
                {company.type[0]} {company.type[1]}
              </div>
            </div>
          </div>
        </div>

        <Modal handleClose={handleClose} isOpen={isOpen}>
          <CompanyForm company={company} />
        </Modal>
      </div>
    )
  );
};

export default CompanyInfo;