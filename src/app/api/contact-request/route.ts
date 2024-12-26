// import { NextResponse } from 'next/server';
//    import { supabase } from "@/utils/supabaseClient";
//    import { WorkSample } from "@/contexts/interfaces";

//    export async function POST(request: Request) {
//      try {
//        const body = await request.json();
//        const { email, samplesRequested } = body;

//        if (!email) {
//          return NextResponse.json({ error: "Missing email in request body" }, { status: 400 });
//        }

//        const insertData: { email: string; workSamples?: WorkSample[] } = { email };
      
//        if (samplesRequested && samplesRequested.length > 0) {
//          insertData.workSamples = samplesRequested;
//        }

//        console.log('Attempting to insert data:', insertData);

//        const { data, error } = await supabase
//          .from("contactRequests")
//          .insert([insertData]);

//        if (error) {
//          console.error('Supabase error:', error);
//          return NextResponse.json({ error: error.message }, { status: 400 });
//        }

//        console.log('Data inserted successfully:', data);
//        return NextResponse.json({ success: true, data });
//      } catch (error) {
//        console.error('Unexpected error in API route:', error);
//        return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
//      }
//    }