class CommonHelper {
  static serialize(form) {
    const formData = new FormData();
    const length = form.length;

    for (let i = 0; i < length; i++) {
      if (
        form[i].name === "serializable" ||
        form[i].getAttribute("serializable")
      ) {
        const id = form[i].id;
        const value = form[i].value;
        formData.append(id, value);
      }
    }
    return formData;
  }

  static handleBlob(data, fileName) {
    data.arrayBuffer().then(function(buffer) {
      var blob = new Blob([buffer], { type: "application/octet-stream" });

      if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob, fileName);
      } else {
        var a = document.createElement("a");
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();

        setTimeout(function() {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        }, 100);
      }
    });
  }

  static isAsyncFunc(func) {
    const AsyncFunction = (async () => {}).constructor;
    return func instanceof AsyncFunction;
  }

  static convertJsonArr(arr) {
    const objArr = [];

    for (let i = 0; i < arr.length; i++) {
      objArr.push(Object.entries(arr[i]));
    }

    return objArr;
  }
}

export default CommonHelper;
