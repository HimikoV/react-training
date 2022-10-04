import React, { createContext, useEffect, useState, useMemo } from "react";
import { mapBasketData } from "./mappers/mapBasketData";
import { getDeliveryOptions } from "./service/getDeliveryOptions";
import { getPaymentOptions } from "./service/getPaymentOptions";
import { requestData } from "./service/requestData";
import { basketType } from "./types/basketType";
import { productType } from "./types/productType";

export const dataContext = createContext<any>({});

const ContextProvider = ({ children }: any) => {
  const [basketData, setBasketData] = useState<basketType[]>(
    JSON.parse(localStorage.getItem("basketData") || "[]")
  );
  const [filter, setFilter] = useState<string[]>([]);
  const [data, setData] = useState<productType[]>([]);
  const [loadLimit, setLoadLimit] = useState<number>(9);
  const [basketProcessedData, setBasketProcessedData] = useState<any>([]);
  const [deliveryOptions, setDeliveryOptions] = useState<any>([]);
  const [paymentOptions, setPaymentOptions] = useState<any>([]);
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      const responseData = await requestData();
      setData(responseData);
      const responseDelivery = await getDeliveryOptions();
      setDeliveryOptions(responseDelivery);
      const responsePayment = await getPaymentOptions();
      setPaymentOptions(responsePayment);
    };
    fetchData();
  }, []);

  useEffect(() => {
    mapBasketData(data, basketData, setBasketProcessedData);
  }, [data]);

  const trueValues = useMemo(
    () => ({
      filter,
      setFilter,
      basketData,
      setBasketData,
      data,
      loadLimit,
      setLoadLimit,
      basketProcessedData,
      setBasketProcessedData,
      deliveryOptions,
      setDeliveryOptions,
      paymentOptions,
      setPaymentOptions,
      open,
      setOpen,
    }),
    [
      filter,
      setFilter,
      basketData,
      setBasketData,
      data,
      loadLimit,
      setLoadLimit,
      basketProcessedData,
      setBasketProcessedData,
      deliveryOptions,
      setDeliveryOptions,
      paymentOptions,
      setPaymentOptions,
      open,
      setOpen,
    ]
  );

  // const values = {};
  return (
    <dataContext.Provider value={trueValues}>{children}</dataContext.Provider>
  );
};
export default ContextProvider;
/**
 * zrób context provider dla danych i może dodaj do niego jakieś state'ty co by zrobić redux dla ubogich
 */
