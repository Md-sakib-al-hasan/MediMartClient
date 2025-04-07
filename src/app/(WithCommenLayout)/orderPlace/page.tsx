import React from 'react';

const OrderConfirmation = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-md shadow my-10">
      <h2 className="text-2xl font-semibold mb-6">Order received</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-200 p-4 rounded-md mb-8">
        <div>
          <p className="text-gray-500 text-sm">Order Number:</p>
          <p className="font-medium">8261</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Date:</p>
          <p className="font-medium">07-Apr-2025</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Email:</p>
          <p className="font-medium">mdsakibulhasanprogrammer1@gmail.com</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Total:</p>
          <p className="font-medium">$381.29</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Payment Method:</p>
          <p className="font-medium">Direct bank transfer</p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Order details</h3>
        <div className="bg-white p-4 rounded-md">
          <div className="flex justify-between border-b py-2">
            <span>Zahler Real Calm Multivitamin x 2</span>
            <span>$246.80</span>
          </div>
          <div className="flex justify-between border-b py-2">
            <span>Nordic Naturals Vitamin D3 x 1</span>
            <span>$134.49</span>
          </div>
          <div className="flex justify-between border-t mt-4 pt-2">
            <span>Subtotal:</span>
            <span>$381.29</span>
          </div>
          <div className="flex justify-between">
            <span>Payment method:</span>
            <span>Direct bank transfer</span>
          </div>
          <div className="flex justify-between font-semibold pt-2 border-t mt-2">
            <span>Total:</span>
            <span>$381.29</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Billing address</h3>
        <div className="bg-white p-4 rounded-md text-sm leading-relaxed">
          <p>md sakib ul hadi afjalulkasif</p>
          <p>charamaar</p>
          <p>mijhijfdakjfasdfas</p>
          <p>jaskdfjadlfhasjk</p>
          <p>ADFASDFAS</p>
          <p>Afghanistan</p>
          <p>02427612417174</p>
          <p>mdsakibulhasanprogrammer1@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
