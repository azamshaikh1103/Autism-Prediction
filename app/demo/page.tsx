"use client";

import { useState } from "react";
import axios from "axios";

const DemoPage = () => {
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formValues: { [key: string]: number } = {};

    formData.forEach((value, key) => {
      formValues[key] = Number(value);
    });
    

    try {
      const response = await axios.post("http://localhost:8000/predict", {
        A1_Score: formValues.A1_Score,
        A2_Score: formValues.A2_Score,
        A3_Score: formValues.A3_Score,
        A4_Score: formValues.A4_Score,
        A5_Score: formValues.A5_Score,
        A6_Score: formValues.A6_Score,
        A7_Score: formValues.A7_Score,
        A8_Score: formValues.A8_Score,
        A9_Score: formValues.A9_Score,
        A10_Score: formValues.A10_Score,
        age: formValues.age,
        gender: "string",
        ethnicity: "string",
        jaundice: "string",
        austim: "string",
        contry_of_res: "string",
        used_app_before: "string",
        result: 0,
        relation: "string",
      }); // Send as JSON

      setResult(response.data.prediction);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main className=" px-20 flex-grow container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Autism Prediction Demo</h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
        <div>
          <label htmlFor="A1_Score" className="block text-sm font-medium">
            A1_Score
          </label>
          <input
            type="number"
            id="A1_Score"
            name="A1_Score"
            required
            className="mt-1 block w-full border dark:text-black border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="A2_Score" className="block text-sm font-medium">
            A2_Score
          </label>
          <input
            type="number"
            id="A2_Score"
            name="A2_Score"
            required
            className="mt-1 block w-full border dark:text-black border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="A3_Score" className="block text-sm font-medium">
            A3_Score
          </label>
          <input
            type="number"
            id="A3_Score"
            name="A3_Score"
            required
            className="mt-1 block w-full border dark:text-black border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="A4_Score" className="block text-sm font-medium">
            A4_Score
          </label>
          <input
            type="number"
            id="A4_Score"
            name="A4_Score"
            required
            className="mt-1 block w-full border dark:text-black border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="A5_Score" className="block text-sm font-medium">
            A5_Score
          </label>
          <input
            type="number"
            id="A5_Score"
            name="A5_Score"
            required
            className="mt-1 block w-full border dark:text-black border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="A6_Score" className="block text-sm font-medium">
            A6_Score
          </label>
          <input
            type="number"
            id="A6_Score"
            name="A6_Score"
            required
            className="mt-1 block w-full border dark:text-black border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="A7_Score" className="block text-sm font-medium">
            A7_Score
          </label>
          <input
            type="number"
            id="A7_Score"
            name="A7_Score"
            required
            className="mt-1 block w-full border dark:text-black border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="A8_Score" className="block text-sm font-medium">
            A8_Score
          </label>
          <input
            type="number"
            id="A8_Score"
            name="A8_Score"
            required
            className="mt-1 block w-full border dark:text-black border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="A9_Score" className="block text-sm font-medium">
            A9_Score
          </label>
          <input
            type="number"
            id="A9_Score"
            name="A9_Score"
            required
            className="mt-1 block w-full border dark:text-black border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="A10_Score" className="block text-sm font-medium">
            A10_Score
          </label>
          <input
            type="number"
            id="A10_Score"
            name="A10_Score"
            required
            className="mt-1 block w-full border dark:text-black border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="age" className="block text-sm font-medium">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            required
            className="mt-1 block w-full border dark:text-black border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Gender</label>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                value="0"
                id="male"
                name="gender"
                defaultChecked
              />
              <label htmlFor="male">Male</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="radio" value={1} id="female" name="gender" />
              <label htmlFor="female">Female</label>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="ethnicity" className="block text-sm font-medium">
            Ethnicity
          </label>
          <input
            type="text"
            id="ethnicity"
            name="ethnicity"
            required
            className="mt-1 block w-full border border-gray-300 dark:text-black rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="jaundice" className="block text-sm font-medium">
            Jaundice
          </label>
          <input
            type="text"
            id="jaundice"
            name="jaundice"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 dark:text-black"
          />
        </div>
        <div>
          <label htmlFor="contry_of_res" className="block text-sm font-medium">
            contry of res
          </label>
          <input
            type="text"
            id="contry_of_res"
            name="contry_of_res"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 dark:text-black"
          />
        </div>

        <button
          type="submit"
          className=" dark:bg-blue-400 rounded-lg dark:text-white px-4 py-2"
        >
          Predict Risk
        </button>
      </form>
      {result && (
        <div className="mt-8 p-4 dark:text-black bg-blue-50 border border-blue-200 rounded-md">
          <h2 className="text-xl font-semibold mb-2">Prediction Result</h2>
          <p>{JSON.stringify(result)}</p>
        </div>
      )}
    </main>
  );
};

export default DemoPage;
