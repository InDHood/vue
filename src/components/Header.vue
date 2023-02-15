<template>
  <header className=" bg-gray-300">
    <div className="w-4/5 h-24 mx-auto flex items-center">
      <router-link to="/">
        <img src="/src/assets/CHX.svg" alt="" />
      </router-link>
      <nav className="flex-grow text-right space-x-10">
        <router-link to="/" className="hover:text-red-600 cursor-pointer">HOME</router-link>
        <router-link to="/about" className="hover:text-red-600 cursor-pointer">ABOUT</router-link>
        <router-link to="/contact" className="hover:text-red-600 cursor-pointer">CONTACT</router-link>
      </nav>
    </div>
  </header>
</template>