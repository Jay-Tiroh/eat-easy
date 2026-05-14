import { cn } from "@/lib/utils";

const PriceText = ({
  price,
  priceClass,
  currencyClass,
  wrapperClass,
}: {
  price: number;
  priceClass?: string;
  currencyClass?: string;
  wrapperClass?: string;
}) => {
  return (
    <div className={cn("flex gap-0.5 items-center", wrapperClass)}>
      <span
        className={cn(
          "text-orange-3 font-bold text-xs leading-3.75",
          currencyClass,
        )}
      >
        $
      </span>{" "}
      <span className={cn("text-price", priceClass)}>{price.toFixed(2)}</span>
    </div>
  );
};

export default PriceText;
