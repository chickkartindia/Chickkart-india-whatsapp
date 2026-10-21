/* Edit shop info, photos, addresses, menu items, prices and fees here. */
window.CHICKKART_CONFIG = {
  whatsappNumber: "916362623318",
  deliveryFee: 35,
  platformFee: 5,
  /* Paste the deployed Google Apps Script /exec URL here to save orders to Sheets.
     Leave blank for WhatsApp-only mode (no central order record). */
  orderEndpoint: "",
  shops: [
    {id:"varma",name:"Varma Chicken",description:"Fresh chicken cuts prepared to order.",address:"Add shop address here",image:"https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=900&q=80",menu:[
      {id:"curry",name:"Curry cut",description:"Regular curry pieces",price:230},
      {id:"biryani",name:"Biryani cut",description:"Pieces for biryani",price:240},
      {id:"boneless",name:"Boneless",description:"Boneless chicken pieces",price:360},
      {id:"whole",name:"Whole chicken",description:"Whole chicken, cleaned",price:220}]},
    {id:"suguna",name:"Suguna Chicken",description:"Choose your preferred cut from this shop's menu.",address:"Add shop address here",image:"https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=900&q=80",menu:[
      {id:"curry",name:"Curry cut",description:"Regular curry pieces",price:240},
      {id:"biryani",name:"Biryani cut",description:"Pieces for biryani",price:250},
      {id:"boneless",name:"Boneless",description:"Boneless chicken pieces",price:390},
      {id:"whole",name:"Whole chicken",description:"Whole chicken, cleaned",price:230}]},
    {id:"avvas",name:"Avvas Chicken",description:"Fresh cuts with prices shown before ordering.",address:"Add shop address here",image:"https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=900&q=80",menu:[
      {id:"curry",name:"Curry cut",description:"Regular curry pieces",price:230},
      {id:"biryani",name:"Biryani cut",description:"Pieces for biryani",price:245},
      {id:"boneless",name:"Boneless",description:"Boneless chicken pieces",price:370},
      {id:"whole",name:"Whole chicken",description:"Whole chicken, cleaned",price:215}]},
    {id:"mahalakshmi",name:"Mahalakshmi Chicken",description:"Pick a cut and quantity to see your total.",address:"Add shop address here",image:"https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=900&q=80",menu:[
      {id:"curry",name:"Curry cut",description:"Regular curry pieces",price:235},
      {id:"biryani",name:"Biryani cut",description:"Pieces for biryani",price:250},
      {id:"boneless",name:"Boneless",description:"Boneless chicken pieces",price:380},
      {id:"whole",name:"Whole chicken",description:"Whole chicken, cleaned",price:225}]}
  ]
};