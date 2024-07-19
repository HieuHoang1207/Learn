// Khởi tạo kích thước của mảng 2 chiều
let rows = 3;
let cols = 4;

// Tạo mảng 2 chiều với kích thước rows x cols
let array2D = new Array(rows);

for (let i = 0; i < rows; i++) {
  array2D[i] = new Array(cols);
}

// Gán giá trị cho các phần tử của mảng 2 chiều
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    array2D[i][j] = i * cols + j + 1; // Ví dụ giá trị: 1, 2, 3, 4, ...
  }
}

// In ra mảng 2 chiều
console.log(array2D);
