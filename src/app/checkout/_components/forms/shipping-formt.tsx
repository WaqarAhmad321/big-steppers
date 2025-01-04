import Input from "@/components/ui/input";
import Select from "@/components/ui/select";
import { useCheckoutStore } from "@/hooks/checkout-store";
import React from "react";

export default function ShippingForm() {
  const { shippingInfo, setShippingInfo, nextStep } = useCheckoutStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="First Name"
          value={shippingInfo.firstName}
          onChange={(e) =>
            setShippingInfo({ ...shippingInfo, firstName: e.target.value })
          }
          required
        />
        <Input
          label="Last Name"
          value={shippingInfo.lastName}
          onChange={(e) =>
            setShippingInfo({ ...shippingInfo, lastName: e.target.value })
          }
          required
        />
      </div>

      <Input
        label="Email"
        type="email"
        value={shippingInfo.email}
        onChange={(e) =>
          setShippingInfo({ ...shippingInfo, email: e.target.value })
        }
        required
      />

      <Input
        label="Phone"
        type="tel"
        value={shippingInfo.phone}
        onChange={(e) =>
          setShippingInfo({ ...shippingInfo, phone: e.target.value })
        }
        required
      />

      <Input
        label="Address"
        value={shippingInfo.address}
        onChange={(e) =>
          setShippingInfo({ ...shippingInfo, address: e.target.value })
        }
        required
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Select
          label="City"
          value={shippingInfo.city}
          onChange={(e) =>
            setShippingInfo({ ...shippingInfo, city: e.target.value })
          }
          options={[
            { value: "karachi", label: "Karachi" },
            { value: "lahore", label: "Lahore" },
            { value: "islamabad", label: "Islamabad" },
          ]}
          required
        />
        <Input
          label="Postal Code"
          value={shippingInfo.postalCode}
          onChange={(e) =>
            setShippingInfo({ ...shippingInfo, postalCode: e.target.value })
          }
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-red-600 text-white py-4 rounded-lg font-medium hover:bg-red-700 transition-colors">
        Continue to Payment
      </button>
    </form>
  );
}
