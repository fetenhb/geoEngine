import React, { Component } from "react";
import { FaAccessibleIcon, FaGg } from "react-icons/fa";
import { SiDatabricks } from "react-icons/si";
import { MdConnectWithoutContact } from "react-icons/md";
import { VscTelescope } from "react-icons/vsc";

export const FeatureList = [
  {
    id: 1,
    icon: <VscTelescope color="#0a1930" size={22} />,
    heading: "Surveying",
    text: "GEO ENGINE deploys its deep knowledge to develop measure and analyze horizontal and vertical control networks using static and rapid GNSS techniques and geodetic levels.",
  },
  {
    id: 2,
    icon: <SiDatabricks color="#0a1930" size={22} />,
    heading: "GIS",
    text: "GEO ENGINEoffers customized GIS Business Solution that meetscustomers’ needs for land management, while respecting the operating methods and of the available resources.",
  },
  {
    id: 3,
    icon: <MdConnectWithoutContact color="#0a1930" size={22} />,
    heading: "Training",
    text: "GEO ENGINE settle its rich experience to extend customer Geomatics techniques knowledge by maintaining a solid training program in mapping, GIS, Database Management …etc.",
  },
];
