<template>
  <section id="menu" class="content-section alt-bg">
    <div class="container">
      <h2>Our Menu</h2>
      <p>Discover our range of specialty coffees, teas, pastries, and light bites. We use locally sourced ingredients whenever possible.</p>

      <div class="menu-categories">
        <div v-for="category in menuCategories" :key="category.name" class="menu-category-wrapper">
          <h3 class="category-title">{{ category.name }}</h3>
          <p v-if="category.note" class="category-note">{{ category.note }}</p>
          <div class="menu-items-list">
            <div v-for="item in category.items" :key="item.name || item.note" class="menu-item" :class="{ 'is-standalone-note': !item.name && item.note }">
              <template v-if="item.name">
                <div class="menu-item-header">
                  <span class="item-name">{{ item.name }}</span>
                  <span v-if="item.price" class="item-price">{{ item.price }}</span>
                </div>
                <p v-if="item.description" class="item-description">{{ item.description }}</p>
                <div v-if="item.options" class="item-options">
                  <div v-for="option in item.options" :key="option.type" class="option">
                    <span class="option-type">{{ option.type }}</span>
                    <span class="item-price">{{ option.price }}</span>
                  </div>
                </div>
              </template>
              <p v-else-if="item.note" class="item-note">{{ item.note }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const menuCategories = ref([
  {
    name: "Coffee & Espresso",
    items: [
      { name: "Espresso", options: [{ type: "Single", price: "$3.25" }, { type: "Double", price: "$3.75" }] },
      { name: "Americano", options: [{ type: "12oz", price: "$3.75" }, { type: "16oz", price: "$4.25" }] },
      { name: "Drip Coffee", description: "Locally Roasted", options: [{ type: "12oz", price: "$3.00" }, { type: "16oz", price: "$3.50" }, { type: "Refill", price: "$1.50" }] },
      { name: "Latte", options: [{ type: "12oz", price: "$5.00" }, { type: "16oz", price: "$5.75" }] },
      { name: "Cappuccino", price: "$4.75", description: "8oz" },
      { name: "Mocha", options: [{ type: "12oz", price: "$5.50" }, { type: "16oz", price: "$6.25" }] },
      { name: "Flat White", price: "$4.75", description: "8oz" },
      { name: "Macchiato", price: "$4.00" },
      { name: "Cold Brew", price: "$5.25", description: "16oz" },
      { name: "Iced Latte", price: "$5.75", description: "16oz" },
      { note: "*Milk Alternatives (Oat, Almond, Soy): +$0.75*" },
      { note: "*Flavour Shot (Vanilla, Caramel, Hazelnut): +$0.75*" }
    ]
  },
  {
    name: "Tea & Other Drinks",
    items: [
      { name: "Loose Leaf Tea", description: "Black, Green, or Herbal varieties", price: "$3.75" },
      { name: "Chai Latte", options: [{ type: "12oz", price: "$5.25" }, { type: "16oz", price: "$6.00" }] },
      { name: "Matcha Latte", options: [{ type: "12oz", price: "$5.50" }, { type: "16oz", price: "$6.25" }] },
      { name: "Hot Chocolate", options: [{ type: "12oz", price: "$4.50" }, { type: "16oz", price: "$5.25" }] },
      { name: "Italian Soda", price: "$4.00" },
      { name: "Freshly Squeezed OJ", price: "$5.00" }
    ]
  },
  {
    name: "Sandwiches & Savoury",
    note: "Served on your choice of sourdough, multigrain, or ciabatta. Gluten-free bread +$2.00",
    items: [
      { name: "Victoria Veggie Delight", description: "Roasted red pepper, cucumber, avocado, sprouts, hummus, and mixed greens.", price: "$11.50" },
      { name: "Classic Ham & Swiss", description: "Smoked ham, Swiss cheese, lettuce, tomato, and dijon aioli.", price: "$12.00" },
      { name: "Turkey Cranberry Club", description: "Roasted turkey breast, bacon, cranberry sauce, lettuce, and mayonnaise.", price: "$13.50" },
      { name: "Caprese Panini", description: "Fresh mozzarella, ripe tomatoes, basil pesto, and a balsamic glaze, grilled.", price: "$12.50" },
      { name: "Soup of the Day", description: "Served with artisan bread", options: [{ type: "Cup", price: "$6.00" }, { type: "Bowl", price: "$8.50" }] },
      { name: "Quiche Slice", description: "Lorraine or Vegetarian", price: "$7.50" }
    ]
  },
  {
    name: "Treats & Pastries",
    note: "Baked fresh daily!",
    items: [
      { name: "Croissant", description: "Butter, Chocolate, or Almond", price: "$4.00 - $4.75" },
      { name: "Muffin", description: "Blueberry, Bran, Banana Choc Chip", price: "$4.25" },
      { name: "Scone", description: "Cheddar Herb or Raspberry White Choc", price: "$4.50" },
      { name: "Cookie", description: "Choc Chip, Oatmeal Raisin, Ginger Molasses", price: "$3.25" },
      { name: "Brownie", description: "Classic Fudge", price: "$4.50" },
      { name: "Lemon Bar / Nanaimo Bar", price: "$4.75" },
      { name: "Slice of Cake / Pie", description: "Ask for today's selection", price: "$6.50 - $7.50" },
      { name: "Energy Bites", description: "Pack of 3", price: "$5.00" }
    ]
  }
]);

</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';

.content-section {
  padding: $spacing-unit * 6 0;
  p { // Style for the introductory paragraph
    text-align: center;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: $spacing-unit * 6; // Increased bottom margin
    font-size: $spacing-unit * 2; // 16px
    color: darken($primary-text, 10%);
    line-height: 1.7;
  }
  h2 {
    text-align: center;
    font-size: $spacing-unit * 4.5; // Larger main title
    margin-bottom: $spacing-unit * 2; // Reduced margin below h2, more above intro p
  }
}
.alt-bg {
  background-color: $accent-color-2; // A slightly different background for variation
}

.menu-categories {
  display: grid;
  grid-template-columns: 1fr; // Single column by default
  gap: $spacing-unit * 5 $spacing-unit * 4; // Row gap, Column gap
  margin-top: $spacing-unit * 2;

  @media (min-width: 768px) { // Two columns for tablets and wider
    grid-template-columns: 1fr 1fr;
  }
}

.menu-category-wrapper { // This wraps each category title and its items
  margin-bottom: $spacing-unit * 6;

  .category-title {
    text-align: center;
    font-size: $spacing-unit * 3.25; // Slightly smaller category titles
    color: $primary-text;
    font-weight: 600; // Bolder category titles
    margin-bottom: $spacing-unit * 1;
    // border-bottom: 2px solid $accent-color-1; // Optional: if you want an underline
  }

  .category-note {
    text-align: center;
    font-style: italic;
    color: lighten($primary-text, 20%);
    margin-bottom: $spacing-unit * 3;
    font-size: $spacing-unit * 1.85; // Slightly larger note
  }
}

.menu-items-list {
  // This div now just groups items, no specific grid styling here
}

.menu-item {
  padding: ($spacing-unit * 1.5) 0; // Adjusted padding
  border-bottom: 1px dashed $accent-color-2; // Dashed border like Duo Cafe

  &:last-child {
    border-bottom: none; // No border for the last item in a category
  }

  .menu-item-header {
    position: relative; // Added for absolute positioning of the price
    display: flex;
    align-items: center; // Better vertical alignment if name/price wraps
    margin-bottom: $spacing-unit * 0.75;

    // Target .item-price specifically within .menu-item-header
    > .item-price {
      font-weight: 600;
      color: $accent-color-1;
      font-size: $spacing-unit * 2.15; // Match item name size
      white-space: nowrap;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }


  .item-name {
    font-weight: 600;
    color: $primary-text;
    font-size: $spacing-unit * 2.15; // Slightly adjusted
    margin-right: $spacing-unit * 2; // Space between name and price
    flex-grow: 1; // Allow name to take available space
    text-align: center; // Center the item name
    margin-right: 0; // Remove margin as price is now absolute
  }

  .item-description {
    font-size: $spacing-unit * 1.75; // Slightly smaller description
    color: lighten($primary-text, 15%);
    line-height: 1.5;
    margin-bottom: $spacing-unit * 1.5;
    // flex-grow: 1; // Not needed here
    // padding-left: $spacing-unit; // Removed indent for a cleaner look
  }

  .item-options {
    margin-top: $spacing-unit;
    .option {
      display: flex;
      justify-content: space-between;
      align-items: center; // Added for better vertical alignment
      font-size: $spacing-unit * 1.85;
      color: lighten($primary-text, 10%); // Base color for option line text
      &:not(:last-child) {
        margin-bottom: $spacing-unit * 0.5;
      }
      .option-type {
        margin-right: $spacing-unit;
        text-align: left; // Ensure text within span is left-aligned
      }
      // Target .item-price specifically within .option
      > .item-price {
        font-weight: 600;
        color: $accent-color-1;
        font-size: $spacing-unit * 1.85; // Match .option font-size
        white-space: nowrap;
        text-align: right; // Ensure price text itself is right-aligned
      }
    }
  }

  .item-note {
    font-style: italic;
    color: lighten($primary-text, 25%);
    font-size: $spacing-unit * 1.75; // 14px
    margin-top: $spacing-unit * 1.5; // Add some space if it's just a note
    text-align: left; // Keep general notes left-aligned
  }

  &.is-standalone-note {
    border-bottom: none; // No separator for these notes
    padding-top: $spacing-unit * 1.5;
    padding-bottom: $spacing-unit * 1.5;
    .item-note {
      text-align: center;
      font-size: $spacing-unit * 1.85;
      color: lighten($primary-text, 10%);
    }
  }
}
</style>
