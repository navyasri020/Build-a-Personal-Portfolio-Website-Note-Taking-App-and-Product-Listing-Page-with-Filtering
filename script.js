function showSection(id) {
      document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
      document.getElementById(id).classList.add('active');
    }

    // To-Do List
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
    const taskInput = document.getElementById('taskInput');

    function renderTasks() {
      taskList.innerHTML = '';
      tasks.forEach((task, i) => {
        const li = document.createElement('li');
        li.textContent = task;
        li.onclick = () => {
          tasks.splice(i, 1);
          localStorage.setItem('tasks', JSON.stringify(tasks));
          renderTasks();
        };
        taskList.appendChild(li);
      });
    }

    function addTask() {
      const val = taskInput.value.trim();
      if (val) {
        tasks.push(val);
        taskInput.value = '';
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
      }
    }

    renderTasks();

    // Products
    const products = [
      { name: 'Smartphone', category: 'tech', price: 699, rating: 4.5, img: "https://smart-phoneprice.com/wp-content/uploads/2022/12/Nokia-5G-Phones-2023.jpg" },
      { name: 'Laptop', category: 'tech', price: 999, rating: 4.8, img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6292/6292312cv3d.jpg"},
      { name: 'T-Shirt', category: 'fashion', price: 25, rating: 4.2, img: "https://tse2.mm.bing.net/th?id=OIP.Vh2QKVv3RZst8BMH24OEeQHaHa&pid=Api&P=0&h=180" },
      { name: 'Sneakers', category: 'fashion', price: 89, rating: 4.6, img: "https://down-id.img.susercontent.com/file/id-11134207-7qul3-lf79arj2lm6296"},
     
    ]
    function renderProducts() {
      const category = document.getElementById('categoryFilter').value;
      const sortBy = document.getElementById('sortBy').value;
      let filtered = [...products];

      if (category !== 'all') {
        filtered = filtered.filter(p => p.category === category);
      }

      if (sortBy === 'price') {
        filtered.sort((a, b) => a.price - b.price);
      } else if (sortBy === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
      }

      const grid = document.getElementById('productGrid');
      grid.innerHTML = '';
      filtered.forEach(p => {
        grid.innerHTML += `
          <div class="product-card">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p><strong>Price:</strong> $${p.price}</p>
            <p><strong>Rating:</strong> ${p.rating}</p>
          </div>`;
      });
    }

    renderProducts();