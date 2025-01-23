import { useRouter } from "next/router";

const router = useRouter();

// Inside the JSX
<button
  onClick={() =>
    router.push({
      pathname: "/CheckoutPage",
      query: { data: JSON.stringify(cartItems) }, // Pass cartItems as a query string
    })
  }
  className="w-full lg:w-[222px] h-[48px] lg:h-[58px] rounded-2xl text-[18px] lg:text-[20px] bg-black text-white hover:bg-[#B88E2F] hover:text-black transition-all"
>
  Check Out
</button>;
