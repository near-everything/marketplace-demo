import { createFileRoute } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { client } from "@/utils/orpc";
import { TSHIRT_PRODUCT } from "@/lib/constants";
import { toast } from "sonner";

export const Route = createFileRoute("/_layout/_authenticated/shop")({
  component: ShopPage,
});

function ShopPage() {
  const checkoutMutation = useMutation({
    mutationFn: async () => {
      const result = await client.createCheckout({
        successUrl: `${window.location.origin}/checkout-success`,
        cancelUrl: `${window.location.origin}/shop`,
      });
      return result;
    },
    onSuccess: (data) => {
      if (data?.url) {
        window.location.href = data.url;
      }
    },
    onError: (error: Error) => {
      toast.error("Failed to create checkout", {
        description: error.message || "Please try again later",
      });
    },
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>{TSHIRT_PRODUCT.name}</CardTitle>
            <CardDescription>{TSHIRT_PRODUCT.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">T-Shirt Preview</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">
                  ${(TSHIRT_PRODUCT.price / 100).toFixed(2)}
                </span>
                <span className="text-sm text-gray-500">
                  {TSHIRT_PRODUCT.size} • {TSHIRT_PRODUCT.color}
                </span>
              </div>
              <Button
                onClick={() => checkoutMutation.mutate()}
                disabled={checkoutMutation.isPending}
                className="w-full"
              >
                {checkoutMutation.isPending ? "Creating checkout..." : "Buy Now"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
