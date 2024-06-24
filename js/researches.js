// // بيانات الأبحاث ككائن JavaScript
// const researchesData = {
//   types: {
//     "نوع 1": [
//       { id: 1, title: "بحث 1", description: "وصف بحث 1" },
//       { id: 2, title: "بحث 2", description: "وصف بحث 2" }
//     ],
//     "نوع 2": [
//       { id: 3, title: "بحث 3", description: "وصف بحث 3" },
//       { id: 4, title: "بحث 4", description: "وصف بحث 4" }
//     ],
//     "نوع 3": [
//       { id: 5, title: "بحث 5", description: "وصف بحث 5" }
//     ]
//   }
// };

// // عرض البيانات على الصفحة
// document.addEventListener("DOMContentLoaded", function() {
//   const typesContainer = document.getElementById("researchTypes"); // استبدل باسم العنصر الذي ستعرض فيه البيانات

//   for (let type in researchesData.types) {
//     if (researchesData.types.hasOwnProperty(type)) {
//       const researches = researchesData.types[type];
//       const typeHeader = document.createElement('h2');
//       typeHeader.textContent = `أبحاث ${type}`;
//       typesContainer.appendChild(typeHeader);

//       const researchList = document.createElement('ul');
//       researches.forEach(research => {
//         const researchItem = document.createElement('li');
//         researchItem.textContent = research.title; // اعتمادًا على تنسيق بياناتك
//         researchList.appendChild(researchItem);
//       });

//       typesContainer.appendChild(researchList);
//     }
//   }
// });
