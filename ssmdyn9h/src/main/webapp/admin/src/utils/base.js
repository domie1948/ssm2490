const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmdyn9h/",
            name: "ssmdyn9h",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmdyn9h/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "一中体育馆管理系统"
        } 
    }
}
export default base
