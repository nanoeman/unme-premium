// app/api/calendar/sync/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // TODO: Verificar firma del webhook de Google Calendar
    // TODO: Sincronizar eventos con la base de datos
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Calendar sync error:', error);
    return NextResponse.json(
      { success: false, error: 'SYNC_FAILED' },
      { status: 500 }
    );
  }
}