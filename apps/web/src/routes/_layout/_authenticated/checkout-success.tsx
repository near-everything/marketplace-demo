import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { apiClient } from "@/utils/orpc";

export const Route = createFileRoute("/_layout/_authenticated/checkout-success")({
  component: CheckoutSuccessPage,
});

function CheckoutSuccessPage() {
  const searchParams = new URLSearchParams(window.location.search);
  const sessionId = searchParams.get("session_id");

  const { data: orders, isLoading } = useQuery(
    orpc.getOrders.queryOptions({
      input: {},
    })
  );

  const order = sessionId && orders ? orders.find(order => order.stripeSessionId === sessionId) || null : null;

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4">Loading order details...</p>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto text-center">
          <Card>
            <CardHeader>
              <CardTitle>Order Not Found</CardTitle>
              <CardDescription>
                We couldn't find your order details. Please contact support if you were charged.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-green-600">Order Confirmed!</CardTitle>
            <CardDescription>
              Your t-shirt order has been successfully placed.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Order ID:</span>
                <span className="text-sm font-mono">{order.id.slice(0, 8)}...</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-medium">Status:</span>
                <Badge variant={order.status === "paid" ? "default" : "secondary"}>
                  {order.status}
                </Badge>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-medium">Amount:</span>
                <span>${(order.totalAmount ? order.totalAmount / 100 : 0).toFixed(2)} {order.currency}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-medium">Quantity:</span>
                <span>{order.quantity}</span>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-gray-600">
                  Your order is being processed. You'll receive updates via email and in your order history.
                </p>
              </div>

              <div className="flex gap-2">
                <a
                  href="/orders"
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded text-center"
                >
                  View All Orders
                </a>
                <a
                  href="/shop"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-center"
                >
                  Shop More
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
