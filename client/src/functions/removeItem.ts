// @ts-ignore
export function removeItem(id: number) {
  let CartList = JSON.parse(localStorage.getItem("cart")!);
  CartList.filter((item: any) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(CartList));
}
