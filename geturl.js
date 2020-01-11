//url=window.location.href
let url="http://localhost:8080/article?id=5e10662d544bb020845974dd&name=sadfsd"
function getParams(url){
    let result={}
    let index=url.indexOf("?")
    if(index==-1){
        return result
    }else{
        url=url.substring(index+1).split("&")
    }
url.forEach(index => {
    index=index.split("=")
  
    result[index[0]]=index[1]
});
return result
}
console.log(getParams(url));

