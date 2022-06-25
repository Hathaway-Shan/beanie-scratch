const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getBeanies(color, astroSign, start, end) {

    let query = client
        .from('beanie_babies')
        .select(`id, title, color, astroSign, image`, { count: 'exact' });
    console.log(color);
    if (color) {
        //.match takes an object with a complete value pair and looks for that
        //in the table
        query = query.ilike('color', `%${color}%`);
    }
    if (astroSign) {
        query = query.ilike('astroSign', `%${astroSign}%`);
    }

    query = query.range(start, end);
    const response = await query;
    //get table info from client
    //name of table is beanie_babies in rubric
    // const response = await client.from('beanie_babies').select(`title, id, image`);
    //return response
    return response;
}

export async function getBeanie(id) {
    //from the beanie table select a single beanie with the matching id
    const response = await client.from('beanie_babies').select('*').match({ id: id }).single();
    return response.data;
}