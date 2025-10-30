import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { orpc } from "@/utils/orpc";

export const Route = createFileRoute("/_layout/_authenticated/orders")({
  component: OrdersPage,
});

const statusLabels = {
  pending: "Pending",
  paid: "Paid",
  processing: "Processing",
  printing: "Printing",
  shipped: "Shipped",
  delivered: "Delivered",
  cancelled: "Cancelled",
} as const;

function OrdersPage() {
  const [page, setPage] = useState(0);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const pageSize = 10;

  const { data: orders, isLoading, error } = useQuery(
    orpc.getOrders.queryOptions({
      input: {
        limit: pageSize,
        offset: page * pageSize,
      },
    })
  );

  const filteredOrders = orders?.filter(order => 
    statusFilter === "all" || order.status === statusFilter
  ) || [];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "paid":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "processing":
      case "printing":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "shipped":
        return "bg-green-100 text-green-800 border-green-200";
      case "delivered":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-center">Loading your orders...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-red-600">Error Loading Orders</CardTitle>
              <CardDescription>
                {error.message || "Failed to load your orders. Please try again."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => window.location.reload()} variant="outline">
                Try Again
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Your Orders</h1>
          <p className="text-gray-600">Track and manage your t-shirt orders</p>
        </div>

        {/* Status Filter */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={statusFilter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setStatusFilter("all")}
            >
              All Orders
            </Button>
            {Object.entries(statusLabels).map(([status, label]) => (
              <Button
                key={status}
                variant={statusFilter === status ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter(status)}
              >
                {label}
              </Button>
            ))}
          </div>
        </div>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <div className="text-gray-500 mb-4">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {statusFilter === "all" ? "No orders yet" : `No ${statusLabels[statusFilter as keyof typeof statusLabels]} orders`}
              </h3>
              <p className="text-gray-500 mb-4">
                {statusFilter === "all" 
                  ? "Start shopping to create your first order"
                  : "Try selecting a different status filter"
                }
              </p>
              {statusFilter === "all" && (
                <Button asChild>
                  <a href="/shop">Start Shopping</a>
                </Button>
              )}
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {filteredOrders.map((order) => (
              <Card key={order.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-lg">Order #{order.id.slice(0, 8).toUpperCase()}</CardTitle>
                      <CardDescription>
                        Placed on {formatDate(order.createdAt.getTime())}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge 
                        className={getStatusColor(order.status)}
                        variant="outline"
                      >
                        {statusLabels[order.status as keyof typeof statusLabels]}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Amount</p>
                      <p className="font-semibold">
                        ${(order.totalAmount ? order.totalAmount / 100 : 0).toFixed(2)} {order.currency}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Quantity</p>
                      <p className="font-semibold">{order.quantity}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Product</p>
                      <p className="font-semibold text-sm truncate">{order.productUid}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Gelato Order</p>
                      <p className="font-semibold text-sm truncate">
                        {order.gelatoOrderId ? order.gelatoOrderId.slice(0, 8).toUpperCase() : "N/A"}
                      </p>
                    </div>
                  </div>

                  {/* Tracking Information */}
                  {order.trackingCodes && order.trackingCodes.length > 0 && (
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm font-medium text-gray-700 mb-2">Tracking Information</p>
                      <div className="space-y-1">
                        {order.trackingCodes.map((tracking, index) => (
                          <div key={index} className="text-sm">
                            <span className="font-medium">{tracking.shipmentMethodName}:</span>{" "}
                            <span className="font-mono">{tracking.trackingCode}</span>
                            {tracking.trackingUrl && (
                              <a 
                                href={tracking.trackingUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="ml-2 text-blue-600 hover:underline"
                              >
                                Track
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Delivery Estimate */}
                  {order.deliveryEstimate && (
                    <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm font-medium text-blue-700 mb-1">Delivery Estimate</p>
                      <p className="text-sm text-blue-600">
                        {formatDate(Number(new Date(order.deliveryEstimate.minDeliveryDate).getTime()))} - {formatDate(Number(new Date(order.deliveryEstimate.maxDeliveryDate).getTime()))}
                      </p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4 border-t">
                    <Button variant="outline" size="sm" asChild>
                      <a href={`/checkout-success?session_id=${order.stripeSessionId}`}>
                        View Details
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/shop">Shop More</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Pagination */}
        {filteredOrders.length > 0 && (
          <div className="mt-8 flex justify-center">
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setPage(Math.max(0, page - 1))}
                disabled={page === 0}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                onClick={() => setPage(page + 1)}
                disabled={(orders?.length || 0) < pageSize}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
