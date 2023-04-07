const getProductPrice = (product) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const PRICE = 100;
      if (PRICE) {
        resolve(PRICE);
      } else {
        reject("unknown product and price");
      }
    }, 1000);
  });
};

const checkUserBalance = (price) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};

const makePayment = (price) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("payment successful");
    }, 1000);
  });
};

const automatePayment = async (product) => {
  try {
    const price = await getProductPrice(product);
    const hasEnoughBalance = await checkUserBalance(price);

    if (hasEnoughBalance) {
      const paymentResult = await makePayment(price);
      console.log(paymentResult);
    } else {
      console.log("insufficient balance");
    }
  } catch (error) {
    console.error(error);
  }
};
