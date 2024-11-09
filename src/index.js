export default {
	async fetch(request) {
		// 获取原始请求的 URL
		const url = new URL(request.url);

		// 目标重定向 URL
		const redirectUrl = new URL("https://blazesnow.com");

		// 将原始查询字符串附加到目标 URL
		redirectUrl.search = url.search;

		// 返回 302 重定向响应
		return Response.redirect(redirectUrl.toString(), 302);
	}
};
