"use client";

import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const Stats = () => {
  const [repoCount, setRepoCount] = useState(0); // State to store repository count

  // Fetch repository count from GitHub API
  useEffect(() => {
    const fetchRepoCount = async () => {
      try {
        // Fetch all repositories with a maximum of 100 per page
        const response = await fetch("https://api.github.com/users/AbisAbz/repos?per_page=100&type=all");
        const repos = await response.json();

        if (response.ok) {
          setRepoCount(repos.length); // Count repositories
        } else {
          console.error("Error fetching repositories:", repos.message);
          setRepoCount(0); // Fallback to 0 if an error occurs
        }
      } catch (error) {
        console.error("Error fetching repository count:", error);
        setRepoCount(0);
      }
    };

    fetchRepoCount();
  }, []);

  // Static data for other stats
  const data = [
    {
      text: "Years of experience",
      num: 10,
    },
    {
      text: "Clients advised",
      num: 25, // Updated for a consultant
    },
    {
      text: "Industries served",
      num: 11, // Updated for a consultant
    },
    {
      text: "Strategic solutions delivered",
      num: 10, // Updated for a consultant
    },
  ];
  

  return (
    <section className="pb-12 pt-4 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-[80vw] mx-auto xl:max-w-none">
          {data.map((item, index) => (
            <div key={index} className="flex-1 flex gap-4 justify-center items-center xl:justify-start">
              <CountUp
                end={item.num}
                duration={5}
                delay={3}
                decimals={item.num % 1 !== 0 ? 1 : 0}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
