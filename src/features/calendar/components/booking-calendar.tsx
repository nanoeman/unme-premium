// features/calendar/components/booking-calendar.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
} from 'date-fns';
import { es } from 'date-fns/locale';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  type: 'occupied' | 'free' | 'booked' | 'maintenance' | 'private' | 'full';
  retreatName?: string;
  spotsLeft?: number;
}

interface BookingCalendarProps {
  events: CalendarEvent[];
  onDateSelect?: (date: Date) => void;
  onEventClick?: (event: CalendarEvent) => void;
}

const eventTypeConfig = {
  occupied: { color: 'bg-stone-400', label: 'Ocupado' },
  free: { color: 'bg-sage-400', label: 'Disponible' },
  booked: { color: 'bg-terracotta', label: 'Reservado' },
  maintenance: { color: 'bg-yellow-400', label: 'Mantenimiento' },
  private: { color: 'bg-purple-400', label: 'Privado' },
  full: { color: 'bg-red-400', label: 'Completo' },
};

export function BookingCalendar({
  events,
  onDateSelect,
  onEventClick,
}: BookingCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const calendarStart = startOfWeek(monthStart, { locale: es });
  const calendarEnd = endOfWeek(monthEnd, { locale: es });

  const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd });

  const weekDays = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

  const getEventsForDay = (day: Date) => {
    return events.filter((event) => isSameDay(event.date, day));
  };

  const handleDateClick = (day: Date) => {
    setSelectedDate(day);
    onDateSelect?.(day);
  };

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  return (
    <div className="w-full rounded-soft bg-white p-6 shadow-soft">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="font-serif text-heading-2 text-stone-800">
            {format(currentMonth, 'MMMM yyyy', { locale: es })}
          </h2>
          <div className="flex gap-1">
            <Button
              variant="outline"
              size="icon"
              onClick={prevMonth}
              className="h-8 w-8"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextMonth}
              className="h-8 w-8"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Button variant="outline" className="gap-2">
          <CalendarIcon className="h-4 w-4" />
          Hoy
        </Button>
      </div>

      {/* Week Days */}
      <div className="mb-2 grid grid-cols-7 gap-1">
        {weekDays.map((day) => (
          <div
            key={day}
            className="py-2 text-center text-sm font-medium text-stone-500"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        <AnimatePresence mode="popLayout">
          {days.map((day, index) => {
            const dayEvents = getEventsForDay(day);
            const isSelected = selectedDate && isSameDay(day, selectedDate);
            const isCurrentMonth = isSameMonth(day, currentMonth);

            return (
              <motion.div
                key={day.toISOString()}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.005 }}
                onClick={() => handleDateClick(day)}
                className={`
                  relative min-h-[100px] cursor-pointer rounded-subtle border p-2 transition-all
                  ${isSelected ? 'border-sage-500 bg-sage-50' : 'border-stone-100 hover:border-stone-200'}
                  ${!isCurrentMonth ? 'bg-stone-50/50 text-stone-400' : 'text-stone-700'}
                `}
              >
                <span className="text-sm font-medium">
                  {format(day, 'd')}
                </span>

                {/* Events */}
                <div className="mt-1 flex flex-col gap-1">
                  {dayEvents.map((event) => (
                    <motion.div
                      key={event.id}
                      whileHover={{ scale: 1.02 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        onEventClick?.(event);
                      }}
                      className={`
                        cursor-pointer rounded-subtle px-2 py-1 text-xs text-white
                        ${eventTypeConfig[event.type].color}
                      `}
                    >
                      <span className="truncate block">{event.title}</span>
                      {event.spotsLeft !== undefined && (
                        <span className="text-[10px] opacity-90">
                          {event.spotsLeft} plazas
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-3">
        {Object.entries(eventTypeConfig).map(([key, config]) => (
          <div key={key} className="flex items-center gap-1.5">
            <div className={`h-3 w-3 rounded-full ${config.color}`} />
            <span className="text-xs text-stone-500">{config.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}