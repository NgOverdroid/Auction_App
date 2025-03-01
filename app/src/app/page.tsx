export default function Home() {
  return (
    <form action={async (form_data : FormData) =>{
      'use server'
      const bid = form_data.get("bid") as string; 
    }}>
      <input name="bid" type="number" placeholder="Bid"></input>
      <button type="submit">Place bid</button>
    </form>
  );
}
