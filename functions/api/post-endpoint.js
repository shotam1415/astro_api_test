export async function onRequestPost(context) {
    // POSTリクエストの処理
    return new Response(JSON.stringify({
      message: "This was a POST!"
    }), {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }