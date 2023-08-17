export async function postData(url, data) {
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const res = await response.json();

        return res;
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

export async function fetchData(url) {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const res = await response.json();

        return res;
    } catch (error) {
        console.error("Fetch error:", error);
    }
}