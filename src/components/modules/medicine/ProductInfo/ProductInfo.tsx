export default function ProductInfo() {
    return (
      <div className=" rounded-lg shadow-sm p-4 sm:p-6 container    mx-auto">
        <h2 className="text-3xl font-bold py-5 ">Description</h2>
        <div className="space-y-4 sm:space-y-6">
          <div className="space-y-3 sm:space-y-4">
            <p className="text-sm sm:text-base text-gray-700">
              Neuriva Brain Performance is a rather new supplement to hit the market. Despite a rather thin ingredient
              list, the product has seen a lot of buzz from its customers. Many are wondering if Neuriva will live up to
              their claims. Neuriva is offered by Schiff Vitamins and can be found both online and in stores around the
              nation. Neuriva brain performance supplement
            </p>
  
            <p className="text-sm sm:text-base text-gray-700">
             {` When looking for an effective brain health supplement, you'll want to see a healthy mix of ingredients
              like fish oil, resveratrol, Phosphatidylserine, Acetyl-L Carnitine, Ginkgo Biloba, bacopa monnieri, and
              Rhodiola Rosea.`}
            </p>
          </div>
  
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">Product Features</h2>
  
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-sm sm:text-base text-gray-700 font-medium">
                  <span className="text-teal-500 font-bold">01.</span> POWERS 5 INDICATORS OF BRAIN PERFORMANCE:
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mt-1">
                  The ingredients of Neuriva support 5 different indicators of brain performance: focus, memory,
                  learning, accuracy and concentration
                </p>
              </div>
  
              <div>
                <h3 className="text-sm sm:text-base text-gray-700 font-medium">
                  <span className="text-teal-500 font-bold">02.</span> CLINICALLY PROVEN NATURAL INGREDIENTS:
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mt-1">
                  Clinical studies have shown that coffee cherry (neurofactor) and plant-sourced PS (phosphatidylserine)
                  enhance brain performance
                </p>
              </div>
  
              <div>
                <h3 className="text-sm sm:text-base text-gray-700 font-medium">
                  <span className="text-teal-500 font-bold">03.</span> NEUROFACTOR, A POWERFUL EXTRACT:
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mt-1">
                  Neurofactor is an extract of whole fruit of the Coffee Arabica plant and has been shown to increase
                  levels of BDNF. BDNF is short for brain-derived neurotrophic factor. This protein (which is found in
                  the brain) BDNF has been widely studied and is known to support the survival of existing neurons and
                  encourage the growth of new neurons
                </p>
              </div>
            </div>
          </div>
  
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">Product Details</h2>
  
            <p className="text-sm sm:text-base text-gray-700">
             {` Based on what's been uncovered so far, there are some clear pros and cons to giving Neuriva a try. Schiff
              does offer a full refund within 30 days if the product is in saleable condition, but opened products will
              serve a 15% restocking fee. The customer is also responsible for return shipping.`}
            </p>
  
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700 pl-4">
              <li>Schiff is a trusted company known for a quality product</li>
              <li>Lack of ingredients could be good for beginners</li>
              <li>Phosphatidylserine is vital to long-term brain health</li>
              <li>Neuriva Plus offers Vitamins B6, B9, B12 (better option than the original formula)</li>
              <li>Twice the amount of phosphatidylserine in the Plus version</li>
              <li>Can be found anywhere</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  