"use client";
import { Download } from "lucide-react";
export default function DownloadResume() { return <button className="primary-button" onClick={() => window.print()}><Download size={16}/> Print / save as PDF</button>; }
