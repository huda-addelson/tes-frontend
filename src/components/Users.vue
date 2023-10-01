<template>
  <section>
    <div class="relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-white">
          <tr>
            <th scope="col" class="px-6 py-3">Name</th>
            <th scope="col" class="px-6 py-3">Username</th>
            <th scope="col" class="px-6 py-3">Email</th>
            <th scope="col" class="px-6 py-3">Gender</th>
            <th scope="col" class="px-6 py-3">Last Update</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b hover:bg-gray-50"
            v-for="item in displayedData">
            <td class="px-6 py-4">
              {{ item.firstName + ' ' + item.lastName }}
            </td>
            <td class="px-6 py-4">
              {{ item.username }}
            </td>
            <td class="px-6 py-4">
              {{ item.email }}
            </td>
            <td class="px-6 py-4">
              {{ item.gender }}
            </td>
            <td class="px-6 py-4">
              {{ item.gender }}
            </td>
            <td class="px-6 py-4">
              <a href="#" class="font-medium text-blue-600 hover:underline"
                >Edit</a
              >
            </td>
          </tr>
        </tbody>
      </table>
      <div
        class="flex items-center justify-center py-4 gap-5"
        aria-label="Table navigation">
        <button
          @click="previousPage"
          :disabled="currentPage === 1"
          class="px-4 py-2 text-white bg-blue-500 rounded-lg">
          Previous
        </button>
        <button
          @click="nextPage"
          :disabled="currentPage >= totalPages"
          class="px-4 py-2 text-white bg-blue-500 rounded-lg">
          Next
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref, computed } from 'vue';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

const toast = useToast();

let users = ref('');
const currentPage = ref(1); // Halaman saat ini
const perPage = 10; // Jumlah data per halaman
console.log(users, 'userss');

const totalPages = computed(() => Math.ceil(users.value.length / perPage));

const displayedData = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return users.value.slice(start, end);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

onMounted(() => {
  axios
    .get('https://dummyjson.com/users')
    .then((data) => {
      console.log(data, 'dataaa');
      users.value = data.data.users;
    })
    .catch((err) => {
      toast.error(err);
    });
});
</script>
