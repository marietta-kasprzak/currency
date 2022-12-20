export const convertPLNToUSD = (PLN) => {
  if (typeof PLN === 'string' || PLN === undefined ){
    return NaN;
  } else if (typeof PLN === 'number' ){
    if (  PLN<0) {
      return '$0.00'
    }
    const PLNtoUSD = PLN / 3.5 
  
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  
    return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
  } else {
  return 'Error';
  }


}