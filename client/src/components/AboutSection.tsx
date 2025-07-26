'use client';

import React from 'react';

const AboutUsSection = () => {
  return (
    <section
      id="about"
      className="bg-black text-white py-20 px-4 sm:px-8 w-full border-t border-neutral-800"
    >
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold">
          <span className="text-white">About </span>
          <span className="text-purple-500">us</span>
        </h2>

        <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto">
          ContextSwap is a desktop application built to help you design, organize, and automate
          custom workflows using smart templates. From setting up recurring tasks to launching tools
          and websites with a single click, ContextSwap turns your routines into powerful automations.
        </p>

        <p className="text-md sm:text-lg text-neutral-400 max-w-3xl mx-auto">
          Our goal is to simplify the way you interact with repetitive actions — giving you a
          centralized platform to manage templates that trigger apps, scripts, or websites on your
          schedule. ContextSwap is built with Electron and React, offering a sleek dark interface,
          blazing performance, and intelligent flexibility tailored to your daily flow.
        </p>
      </div>
    </section>
  );
};

export default AboutUsSection;
