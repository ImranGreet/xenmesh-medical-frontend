export interface Links {
	nextUrl?: string | null;
	previusUrl?: string | null;
}

export interface meta {
	current_page: number | null;
	per_page: number | null;
	total: number | null;
	last_page: number | null;
	from: number | null;
	to: number | null;
	has_more_pages: boolean | null;
}
