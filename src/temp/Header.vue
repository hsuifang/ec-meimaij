<template>
  <div class="sticky-top">
    <nav
      class="navbar navbar-expand-lg bg-white navbar-light border-bottom border-primary shadow-sm"
    >
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- logo -->
        <div class="navbar-brand me-5 pointer" @click="$router.push('/')">
          <img
            src="https://opencart.dostguru.com/PT01/petshop_02/image/catalog/logo.png"
            alt="logo"
            class="navbar-brand-item"
          />
        </div>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav navbar-nav-scoll">
            <li class="nav-item me-3">
              <router-link to="/" class="nav-link active" aria-current="page">首頁</router-link>
            </li>
            <li v-dropdown class="nav-item me-3 dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="javascript:void(0)"
                role="button"
                aria-expanded="false"
              >
                鎂麥產品
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="javascript:void(0)">鎂麥生肉餐</a></li>
                <li><a class="dropdown-item" href="javascript:void(0)">鎂麥鮮食</a></li>
                <li><a class="dropdown-item" href="javascript:void(0)">鎂麥零食</a></li>
              </ul>
            </li>
            <!-- v-dropdown -->
            <li v-dropdown class="nav-item me-3 dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="javascript:void(0)"
                role="button"
                aria-expanded="false"
              >
                常見問題
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                <li><router-link class="dropdown-item" to="/cart">生食</router-link></li>
                <li><a class="dropdown-item" href="#">訂購與寄送</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link">專欄</router-link>
            </li>
          </ul>
        </div>
        <div class="d-flex align-items-center">
          <a href="#" class="me-3 d-block">
            <i class="material-icons fs-4 text-info"> account_circle </i>
          </a>
          <a href="#" class="me-3 d-block">
            <i class="material-icons fs-4 text-info"> favorite_border </i>
          </a>
          <div>
            <i class="material-icons fs-4 text-info"> shopping_cart </i>
            <p
              class="position-absolute start-50 bg-primary px-1 rounded-circle text-white"
              style="font-size: 12px; padding-top: 2px; padding-bottom: 2px; top: -10px"
            >
              20
            </p>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
