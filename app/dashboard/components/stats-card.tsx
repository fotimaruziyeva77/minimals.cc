"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";

export default function StatsCards() {
  const stats = [
    {
      title: "Total active users",
      value: "18,765",
      change: "+2.6%",
      duration: "last 7 days",
      up: true,
      barColor: "bg-green-500",
    },
    {
      title: "Total installed",
      value: "4,876",
      change: "+0.2%",
      duration: "last 7 days",
      up: true,
      barColor: "bg-sky-500",
    },
    {
      title: "Total downloads",
      value: "678",
      change: "-0.1%",
      duration: "last 7 days",
      up: false,
      barColor: "bg-orange-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
      {stats.map((item, i) => (
        <Card key={i} className="p-5 rounded-2xl shadow-sm">
          <CardContent className="p-0">
            <p className="text-sm text-gray-500">{item.title}</p>

            <div className="flex items-start justify-between mt-2">
              <h2 className="text-3xl font-bold">{item.value}</h2>

              {/* Mini bar chart imitation */}
              <div className="flex gap-1 items-end">
                {[12, 18, 10, 22, 17].map((h, idx) => (
                  <div
                    key={idx}
                    className={`${item.barColor} w-1.5 rounded-full`}
                    style={{ height: h }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-1 mt-2 text-sm">
              {item.up ? (
                <ArrowUp className="w-4 h-4 text-green-500" />
              ) : (
                <ArrowDown className="w-4 h-4 text-orange-500" />
              )}
              <span className={item.up ? "text-green-600" : "text-orange-600"}>
                {item.change}
              </span>
              <span className="text-gray-500">{item.duration}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
