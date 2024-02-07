const schoolObject = {
  subjects: ["Maths ", "Chemistry", "Biology"],
  subjectRender: function () {
    return this.subjects.map((item, index) => `${index + 1}).${item}`).join();
  },
  subjectRenderByArrow: () => {
    return (
      this?.subjects?.map((item, index) => `${index + 1}).${item}`).join() ||
      "Subjects are not  available"
    );
  },
};
console.log(schoolObject.subjectRender()); // 1).Maths ,2).Chemistry,3).Biology , because this is available
console.log(schoolObject.subjectRenderByArrow()); // Subjects are not  available , because this is not available
console.log("--------------XXXXXXX---------------");

// -----------------------------------------------------------------xxxx---------------------------------------------------------
